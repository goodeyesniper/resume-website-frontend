import Hero from "../components/Hero";
import { Button, TextField, InputAdornment, IconButton, Box, Typography } from "@mui/material";
import React, { useState, useEffect, useMemo } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from "react-router-dom";
import '../css/Blog.css'


const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const Blog = () => {
	const [searchValue, setSearchValue] = useState('');
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const toggleDrawer = () => setSidebarOpen(!sidebarOpen);
	const { postId } = useParams();
	const navigate = useNavigate();
	const [posts, setPosts] = useState([]);
	const [selectedPost, setSelectedPost] = useState(null);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	// useEffect(() => {
	// 	const container = document.querySelector('.prose');
	// 	if (container) {
	// 		container.querySelectorAll('img, p, figure').forEach(el => {
	// 			el.style.height = 'auto';
	// 		});
	// 	}
	// }, [selectedPost, sidebarOpen, searchValue]);

	const handleSearch = () => {
		if (searchValue.trim()) {
			setSidebarOpen(true); // open the drawer when searching
		}
	};

	const handleMenuClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	// Fetch posts
	useEffect(() => {
		axios.get("http://127.0.0.1:8000/api/posts/")
			.then(res => {
				const sortedPosts = [...res.data].reverse();
				setPosts(sortedPosts);

				if (postId) {
					const found = sortedPosts.find(p => String(p.id) === postId);
					setSelectedPost(found || sortedPosts[0]);
				} else {
					setSelectedPost(sortedPosts[0]);
				}
			})
			.catch(err => console.error("Error fetching posts:", err));
	}, [postId]);

	const handlePostClick = (id) => {
		navigate(`/blog/${id}`);
	};

	const getEmbedUrl = (url) => {
		if (!url) return null;
		return url.replace("watch?v=", "embed/");
	};

	const prependMediaUrl = (html) => {
		return html.replace(/src="\/media\//g, 'src="http://127.0.0.1:8000/media/');
	};

	const filteredPosts = useMemo(() => {
		if (!searchValue.trim()) return posts;

		const lowerSearch = searchValue.toLowerCase();

		return posts.filter((post) => {
			const title = post.title.toLowerCase();
			const keywords = post.keywords?.toLowerCase() || '';
			const date = formatDate(post.date).toLowerCase();

			return (
				title.includes(lowerSearch) ||
				keywords.includes(lowerSearch) ||
				date.includes(lowerSearch)
			);
		});
	}, [posts, searchValue]);

  return (
    <>
      <Hero title="Blog Page" subtitle="Blog Page" />
      <div className="container-fluid">
				<div className="max-w-[90rem] mx-auto mb-10 p-4">
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						width="100%"
						my={5}
						pb={1}
						sx={{
							borderBottom: '1px solid #d1d5dc',
							flexDirection: { xs: 'column', sm: 'row' },
							alignItems: { xs: 'stretch', sm: 'center' },
							gap: { xs: 0, sm: 10 },
							whiteSpace: 'nowrap',
    					overflow: 'hidden',
						}}
					>
						
            <Typography variant="h6" fontWeight="bold" sx={{marginBottom: {xs: 2, sm: 0 }}}>
              Blog Preview
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === 'Enter') {
									handleSearch();
								}
							}}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleSearch} edge="end">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
					
					<div className="grid grid-cols-1 md:grid-cols-4 w-full md:gap-0 lg:gap-10">
						{/* Toggle Button */}
						<div className="block lg:hidden">
							<IconButton
								onClick={toggleDrawer}
								sx={{
									width: 25,
									position: 'fixed',
									top: '50%',
									right: 0,
									transform: 'translateY(-50%)',
									bgcolor: '#8ec5ff',
									boxShadow: 2,
									borderRadius: '4px 0 0 4px',
									zIndex: 1401,
								}}
							>
								{sidebarOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
							</IconButton>
						</div>

						{/* First Column */}
						<div className="col-span-4 lg:col-span-3 overflow-hidden">
							<AnimatePresence mode="wait">
								{selectedPost && (
									<motion.div
										key={selectedPost.id}
											
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											transition={{ duration: 0.4 }}
										>
										<div className="font-bold flex items-center justify-between pb-5 whitespace-nowrap">
											<div className="flex items-center">
												<h5 className="text-sm">{formatDate(selectedPost.date)}</h5> &nbsp; &bull; &nbsp;
												<h1 className="font-bold">{selectedPost.author}</h1>
											</div>
											<div>
												<IconButton onClick={handleMenuClick}>
													<MoreVertIcon />
												</IconButton>
												<Menu
													anchorEl={anchorEl}
													open={open}
													onClose={handleMenuClose}
													anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
													transformOrigin={{ vertical: 'top', horizontal: 'right' }}
												>
													<MenuItem onClick={handleMenuClose}>Share Post</MenuItem>
													{/* Add more items as needed */}
												</Menu>
											</div>
										</div>
										{selectedPost.image && (
											<div className="pb-5">
												<img src={selectedPost.image} alt={selectedPost.title} />
											</div>
										)}
										<div className="pb-5">
											{selectedPost.video ? (
												<video width="100%" controls>
													<source src={getEmbedUrl(selectedPost.video_url)} type="video/mp4" />
													Your browser does not support the video tag.
												</video>
											) : selectedPost.video_url ? (
												<iframe
													width="100%"
													height="400"
													src={getEmbedUrl(selectedPost.video_url)}
													title="Video"
													frameBorder="0"
													allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
													allowFullScreen
												></iframe>
											) : null}
										</div>
										
										<h1 className="text-lg md:text-2xl font-bold pb-10">{selectedPost.title}</h1>
										<div
											className="prose max-w-none h-auto"
											dangerouslySetInnerHTML={{ __html: prependMediaUrl(selectedPost.body) }}
										></div>
										<div className="flex items-center pt-10">
											<h1>Keywords: &nbsp;</h1>
											<Button className="custom-button-circular">{selectedPost.keywords}</Button>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
							
							<div className="flex justify-center pt-10 my-10">
								<div className="block lg:hidden">
									<Button className="custom-button-black" onClick={toggleDrawer}>Other Posts</Button>
								</div>
							</div>
						</div>
						

						{/* Sidebar Drawer */}
						<Drawer
							anchor="right"
							open={sidebarOpen}
							onClose={toggleDrawer}
							variant="temporary"
							sx={{
								'& .MuiDrawer-paper': {
									width: 300,
									p: 1,
								},
							}}
						>
							<Typography variant="h6" fontWeight="bold" gutterBottom>
								Blog Posts
							</Typography>
							<ul className="px-2 py-2 mt-1 h-[100vh] overflow-y-auto border border-gray-300">
								{filteredPosts.map((post) => {
									const hasImage = !!post.image;
									return (
										<li
											key={post.id}
											onClick={() => handlePostClick(post.id)}
											className={`cursor-pointer pb-5 flex gap-x-4 transition hover:bg-gray-100 p-2 rounded-md ${
												selectedPost?.id === post.id ? 'bg-gray-200 font-semibold' : ''
											}`}
										>
											{hasImage && (
												<div className="w-1/3 pt-1">
													<img src={post.image} alt={post.title} className="" />
												</div>
											)}

											<div className={`${hasImage ? 'w-2/3' : 'w-full'}`}>
												<h5 className="text-xs">{formatDate(post.date)}</h5>
												<h1 className="text-sm font-bold pt-1">{post.title}</h1>
											</div>
										</li>
									);
								})}
							</ul>
						</Drawer>

						{/* Second Column */}
							<div className="hidden lg:block col-span-1 gap-x-4 gap-y-10">
								<div className="w-full">
									<div className="border-b border-gray-300 mb-6 pb-2 text-lg font-bold">Blog Posts</div>
									<ul className="px-2 pt-2 pb-5 h-[80vh] overflow-y-auto border border-gray-300">

										{filteredPosts.map((post) => {
											const hasImage = !!post.image;
											return (
												<li
													key={post.id}
													onClick={() => handlePostClick(post.id)}
													className={`cursor-pointer pb-5 flex gap-x-4 transition hover:bg-gray-100 p-2 rounded-md ${
														selectedPost?.id === post.id ? 'bg-gray-200 font-semibold' : ''
													}`}
												>
													{hasImage && (
														<div className="w-1/3 pt-1">
															<img src={post.image} alt={post.title} className="" />
														</div>
													)}

													<div className={`${hasImage ? 'w-2/3' : 'w-full'}`}>
														<h5 className="text-xs">{formatDate(post.date)}</h5>
														<h1 className="text-sm font-bold pt-1">{post.title}</h1>
													</div>
												</li>
											);
										})}
										
									</ul>
								</div>
							</div>
					</div>
				</div>
			</div>
    </>
  );
};

export default Blog;


