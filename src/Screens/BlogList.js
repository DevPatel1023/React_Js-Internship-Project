import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import '../CSS/Blog.css';
import pic1 from '../Images/Blogimage/pic1.jpg';
import pic3 from '../Images/Blogimage/pic3.jpg';
import pic2 from '../Images/Blogimage/pic2.jpg';
import pic4 from '../Images/Blogimage/pic4.jpg';
import pic5 from '../Images/Blogimage/pic5.jpg';
import pic6 from '../Images/Blogimage/pic6.jpg';
import pic7 from '../Images/Blogimage/pic7.jpg';
import pic8 from '../Images/Blogimage/pic8.jpg';
import pic9 from '../Images/Blogimage/pic9.jpg';
import pic10 from '../Images/Blogimage/pic10.jpg';

export default function BlogHeader() {
    const [cards] = useState([

        {
            image: pic1,
            title: 'Post 1',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit iste illum dolorem voluptatibus ad, obcaecati est eius doloribus quo vel fugit nostrum soluta repellat eum officia architecto culpa aliquam ratione qui, in quidem voluptatem?'

        },
        {
            image: pic2,
            title: 'Post 2',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit iste illum dolorem voluptatibus ad, obcaecati est eius doloribus quo vel fugit nostrum soluta repellat eum officia architecto culpa aliquam ratione qui, in quidem voluptatem?'
        },
        {
            image: pic3,
            title: 'Post 3',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit iste illum dolorem voluptatibus ad, obcaecati est eius doloribus quo vel fugit nostrum soluta repellat eum officia architecto culpa aliquam ratione qui, in quidem voluptatem?'
        },
        {
            image: pic4,
            title: 'Post 4',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit iste illum dolorem voluptatibus ad, obcaecati est eius doloribus quo vel fugit nostrum soluta repellat eum officia architecto culpa aliquam ratione qui, in quidem voluptatem?'
        },
        {
            image: pic5,
            title: 'Post 5',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit iste illum dolorem voluptatibus ad, obcaecati est eius doloribus quo vel fugit nostrum soluta repellat eum officia architecto culpa aliquam ratione qui, in quidem voluptatem?'
        },
        {
            image: pic6,
            title: 'Post 6',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit iste illum dolorem voluptatibus ad, obcaecati est eius doloribus quo vel fugit nostrum soluta repellat eum officia architecto culpa aliquam ratione qui, in quidem voluptatem?'
        },
        {
            image: pic7,
            title: 'Post 7',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit iste illum dolorem voluptatibus ad, obcaecati est eius doloribus quo vel fugit nostrum soluta repellat eum officia architecto culpa aliquam ratione qui, in quidem voluptatem?'
        },
        {
            image: pic8,
            title: 'Post 8',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit iste illum dolorem voluptatibus ad, obcaecati est eius doloribus quo vel fugit nostrum soluta repellat eum officia architecto culpa aliquam ratione qui, in quidem voluptatem?'
        },
        {
            image: pic9,
            title: 'Post 9',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit iste illum dolorem voluptatibus ad, obcaecati est eius doloribus quo vel fugit nostrum soluta repellat eum officia architecto culpa aliquam ratione qui, in quidem voluptatem?'
        },
        {
            image: pic10,
            title: 'Post 10',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit iste illum dolorem voluptatibus ad, obcaecati est eius doloribus quo vel fugit nostrum soluta repellat eum officia architecto culpa aliquam ratione qui, in quidem voluptatem?'
        }
    ])
    return (
        <>
            <div>
                <div style={{ marginLeft: '20px' }}>
                    <h1 style={{ marginTop: '10px' }}>List</h1>

                    <Button
                        variant="contained"
                        color="primary"
                        //onClick={handleClick}
                        style={{ float: 'right', marginRight: '20px' }}
                        startIcon={<AddIcon />}
                    >
                        New Post
                    </Button>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <nav>
                        <ul style={{ marginBottom: '10px' }}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" to="/">dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to="/"> Blog </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to="/">List </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Divider style={{ marginTop: '20px' }}></Divider>

                <form className="d-flex" role="search">
                    <input className="form-control me-2 custom-search" type="search" placeholder="Search" aria-label="Search" />

                </form>

                <section>
                    <div className='container'>
                        <div className='cards'>
                            {
                                cards.map((card, i) => (

                                    <div key={i} className="card" style={{ borderRadius: 10 }}>
                                        <img src={card.image} alt={card.title} style={{ width: '30%', borderRadius: 10, float: 'right' }}></img>
                                        <h2 style={{ marginTop: '15px' }}>{card.title}</h2>
                                        <p style={{ marginTop: '40px' }}>
                                            {card.text}
                                        </p>
                                        <Button variant="contained" size="small" style={{ marginTop: '10px' }} >Read More</Button>

                                    </div>


                                ))
                            }
                        </div>
                    </div>
                </section>





            </div>
        </>
    );
}
