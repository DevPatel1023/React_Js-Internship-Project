
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Badge, Box, Button, Container, Divider, Pagination, TextField, Toolbar } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {  grey } from '@mui/material/colors';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
// import '/OneDriveTemp';
const BlogDescription = () => {
    return (
        <>
            <Toolbar sx={{ gap: 2, justifyContent: 'space-between' }}>
                <Button color='inherit'>
                    <ArrowBackIosNewIcon />
                    <Typography variant='h7' color={grey}>
                        Back
                    </Typography>
                </Button>
                <div style={{ marginRight: '10px' }}>
                    <Button color='inherit' >
                        <EditRoundedIcon />
                    </Button>
                    <Button variant="contained" sx={{ bgcolor: 'black', fontFamily: 'inherit' }} >
                        Published
                        <KeyboardArrowDownIcon />
                    </Button>
                </div>
            </Toolbar>
            <div></div>
            <div></div>
            <Card sx={{ width: 1200, }}>
                <CardContent
                    sx={{
                        backgroundImage: `url('https://y20india.in/wp-content/uploads/2024/04/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg')`,
                        backgroundSize: 'cover',
                        color: 'white', // Optional: Text color
                        height: 500,
                    }}>
                    <Toolbar>
                    </Toolbar >
                    <Typography variant="h4" component="div" sx={{fontFamily:'sans-serif', fontSize:40}}>
                        <bold>
                        Exploring the Hidden Gems of
                        </bold>
                    </Typography>
                    <div style={{ position: 'relative', bottom: 8, right: 8 }}>
                        <Toolbar sx={{ gap: 2, justifyContent: 'flex-end', position: '-moz-initial' }}>
                            <Button>
                                <ShareRoundedIcon
                                    sx={{
                                        position: 'absolute',
                                        bottom: 8,
                                        right: 8,
                                        borderRadius: 'inherit', // Rounded shape
                                        bgcolor: 'inherit', // Background color (you can change this)
                                        color: 'inherit',
                                    }} />
                            </Button>
                        </Toolbar>
                    </div>
                </CardContent>
            </Card>
            <Toolbar>
            </Toolbar>
            <Container maxWidth="md" >
                <Box mt={3}>
                    <Box mt={2}>
                        <Typography variant='inherit' fontWeight={600} >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minima totam delectus deserunt, quisquam ea nihil voluptate aliquam exercitationem optio expedita! Quisquam, explicabo iusto id distinctio neque ipsum dolore odio.
                        </Typography>
                        <Box mt={2}>
                            <Typography variant='h1' fontWeight={500}>
                                Heading H1
                            </Typography>
                        </Box>
                        <Box mt={2}>
                            <Typography variant='h2' fontWeight={500}>
                                Heading H2
                            </Typography>
                        </Box>
                        <Box mt={2}>
                            <Typography variant='h3' fontWeight={500}>
                                Heading H3
                            </Typography>
                        </Box>
                        <Box mt={2}>
                            <Typography variant='h4' fontWeight={500}>
                                Heading H4
                            </Typography>
                        </Box>
                        <Box mt={2}>
                            <Typography variant='h5' fontWeight={500}>
                                Heading H5
                            </Typography>
                        </Box>
                        <Box mt={2}>
                            <Typography variant='h6' fontWeight={500}>
                                Heading H6
                            </Typography>
                        </Box>
                    </Box>
                    <Box mt={6}>
                        <Divider />
                    </Box>
                    <Box mt={6}>
                        <Typography variant='h4' fontWeight={500}>
                            Paragraph
                        </Typography>
                        <p className="spacer"></p>
                        <Box>
                            <Typography variant='h7'>
                                So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.
                            </Typography>
                            <Typography>
                                <p className="spacer"></p>
                                With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.
                            </Typography>
                        </Box>
                    </Box>
                    <p><strong>This is strong text.</strong></p>
                    <p><em>This is italic text.</em></p>
                    <p><u>This is underline text.</u></p>

                    <ul>
                        <Divider />
                        <Typography variant='h4'>
                            <li>Unordered list</li>
                        </Typography>
                        <Typography variant='h7'>

                            <ul>
                                <li>Implements<a href="#internal-link"> This is an inside link</a></li>
                                <li>Implements<a href="https://example.com"> This is an external link</a></li>
                                <li>Renders actual, "native" React DOM elements</li>
                                <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>
                                <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>
                            </ul>
                        </Typography>
                    </ul>
                    <Divider />
                    <ol>
                        <li>Ordered list</li>
                        <li>Analysis</li>
                        <li>Design</li>
                        <li>Implementation</li>
                    </ol>
                    <img className='container' src='https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_14.jpg' width={850} height={500} sx={{borderRadius:'20px'}} alt='imagealternative'></img>
                    <Typography variant='h6'></Typography>
                </Box>
                <form>
                    <p className="spacer"></p>
                    <Divider />
                    <p className="spacer"></p>
                    <Toolbar>
                        <Button variant="contained" sx={{ marginLeft: '10px' }} color='grey' bgcolor='black' size="small" >Technology</Button>
                        <Button variant="contained" sx={{ marginLeft: '10px' }} color='grey' bgcolor='grey' size="small">Marketing</Button>
                        <Button variant="contained" sx={{ marginLeft: '10px' }} color='grey' bgcolor='grey' size="small">Photography</Button>
                        <Button variant="contained" sx={{ marginLeft: '10px' }} color='grey' bgcolor='grey' size="small">Design</Button>
                        <Button variant="contained" sx={{ marginLeft: '10px' }} color='grey' bgcolor='grey' size="small">Art</Button>
                    </Toolbar>
                    <Divider />
                    <p className="spacer"></p>
                    <p className="spacer"></p>
                    <Badge badgeContent={4} color="inherit" variant='h2' sx={{fontSize:50}}>
                    <Typography variant='h4' fontWeight={4400} fontFamily='Sans-serif'>
                        Comments
                    </Typography>
                    </Badge>
                    <p className="spacer"></p>
                    <TextField
                        label="Write Some of Blog Content"
                        multiline
                        rows={4} // Increase or decrease this value to adjust the height
                        fullWidth
                        variant="outlined"
                        fontFamily='Sans-serif'
                        sx={{
                            borderRadius: '10px', // Adjust the value to increase or decrease the curvature
                        }}
                    />
                </form>
                <p className="spacer"></p>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <div sx={{ justifyContent:'left' }}>

                    <Button  size='small' color='inherit'>
                        <AddPhotoAlternateOutlinedIcon />
                    </Button>
                    <Button size='small' color='inherit'>
                        <AttachFileOutlinedIcon />
                    </Button>
                    <Button size='small' color='inherit'>
                        <AddReactionOutlinedIcon />
                    </Button>
                    </div>
                    <Button variant="contained" sx={{ bgcolor: 'black', fontFamily: 'inherit',  borderRadius: '5px' }} >Post comment</Button>
                </Toolbar>
                <p className="spacer"></p>
                <Divider/> 
                <p className="spacer"></p>
                <Toolbar sx={{ justifyContent: 'center' ,fontSize:100}}>

                    <Pagination count={10} variant="contained" sx={{bgcolor:'inherit',}} />
                </Toolbar>
            </Container>
        </>
    )
}

export default BlogDescription;
