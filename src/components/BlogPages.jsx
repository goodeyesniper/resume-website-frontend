import Hero from "../components/Hero";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const BlogPages = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchValue);
    // Add your search logic here
  };

  return (
    <>
      <Hero title="Blog" subtitle="Blog Hub" />
      <div className="container-fluid">
				<div className="max-w-7xl mx-auto mb-10 p-4">
          <Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						width="100%"
						my={5}
						borderBottom={1}
						pb={1}
						sx={{
							flexDirection: { xs: 'column', sm: 'row' },
							alignItems: { xs: 'stretch', sm: 'center' },
							gap: { xs: 0, sm: 10 },
							mb: { xs: 5, sm: 5 },
							whiteSpace: 'nowrap',
    					overflow: 'hidden',
						}}
					>
            <Typography variant="h6" fontWeight="bold" sx={{marginBottom: {xs: 2, sm: 0 }}}>
              Recent Blog Posts
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
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

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10 border my-10">
						<div className="col-span-1 border overflow-hidden">
							<img src="/image8.jpg" alt="" />
							<div className="flex pt-2 pb-5 font-bold whitespace-nowrap">
								<h1>Author Name</h1> &nbsp; | &nbsp;
								<h2>Date Here</h2>
							</div>
							<h1 className="text-lg font-bold pb-2">Blog Title Here</h1>
							<h1 className="pb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, cupiditate.</h1>
						</div>
						<div className="col-span-1 border overflow-hidden">
							<img src="/image8.jpg" alt="" />
							<div className="flex pt-2 pb-5 font-bold whitespace-nowrap">
								<h1>Author Name</h1> &nbsp; | &nbsp;
								<h2>Date Here</h2>
							</div>
							<h1 className="text-lg font-bold pb-2">Blog Title Here</h1>
							<h1 className="pb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, cupiditate.</h1>
						</div>
						<div className="col-span-1 border overflow-hidden">
							<img src="/image8.jpg" alt="" />
							<div className="flex pt-2 pb-5 font-bold whitespace-nowrap">
								<h1>Author Name</h1> &nbsp; | &nbsp;
								<h2>Date Here</h2>
							</div>
							<h1 className="text-lg font-bold pb-2">Blog Title Here</h1>
							<h1 className="pb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, cupiditate.</h1>
						</div>
						<div className="col-span-1 border overflow-hidden">
							<img src="/image8.jpg" alt="" />
							<div className="flex pt-2 pb-5 font-bold whitespace-nowrap">
								<h1>Author Name</h1> &nbsp; | &nbsp;
								<h2>Date Here</h2>
							</div>
							<h1 className="text-lg font-bold pb-2">Blog Title Here</h1>
							<h1 className="pb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, cupiditate.</h1>
						</div>
						<div className="col-span-1 border overflow-hidden">
							<img src="/image8.jpg" alt="" />
							<div className="flex pt-2 pb-5 font-bold whitespace-nowrap">
								<h1>Author Name</h1> &nbsp; | &nbsp;
								<h2>Date Here</h2>
							</div>
							<h1 className="text-lg font-bold pb-2">Blog Title Here</h1>
							<h1 className="pb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, cupiditate.</h1>
						</div>
					</div>

					<div className="flex justify-between items-center w-full my-10 border p-2 flex-wrap sm:flex-nowrap gap-4 whitespace-nowrap overflow-hidden">
            <Button className="custom-button-black">Previous</Button>

            {/* Page numbers - hide on small screens */}
            <div className="hidden sm:flex gap-2">
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>4</Button>
              <Button>5</Button>
            </div>

            {/* Current page for small screens only */}
            <div className="block sm:hidden font-semibold text-center">
              Page 3 {/* Ideally, dynamically render current page */}
            </div>

            <Button className="custom-button-black">Next</Button>
          </div>
				</div>
			</div>
    </>
  );
};

export default BlogPages;
