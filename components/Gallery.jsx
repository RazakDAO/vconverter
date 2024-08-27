import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
    {
        image: '/produits/30.png',
        category: 'Lorem',
        name: 'Lorem Ipsum',
        description: 
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        link: '/',
        codepen: '/',
    },
    {
        image: '/produits/30.png',
        category: 'Lorem',
        name: 'Lorem Ipsum',
        description: 
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        link: '/',
        codepen: '/',
    },
    {
        image: '/produits/30.png',
        category: 'Lorem',
        name: 'Lorem Ipsum',
        description: 
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        link: '/',
        codepen: '/',
    },
    {
        image: '/produits/30.png',
        category: 'Lorem',
        name: 'Lorem Ipsum',
        description: 
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        link: '/',
        codepen: '/',
    },
    {
        image: '/produits/5.png',
        category: 'Lorem',
        name: 'Lorem Ipsum',
        description: 
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        link: '/',
        codepen: '/',
    },
    {
        image: '/produits/6.png',
        category: 'Lorem',
        name: 'Lorem Ipsum',
        description: 
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        link: '/',
        codepen: '/',
    },
    {
        image: '/produits/7.png',
        category: 'Lorem',
        name: 'Lorem Ipsum',
        description: 
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        link: '/',
        codepen: '/',
    },
    {
        image: '/produits/8.png',
        category: 'Lorem',
        name: 'Lorem Ipsum',
        description: 
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        link: '/',
        codepen: '/',
    },
    
]

const Gallery = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                My gallery
            </h2>
            <div>
                {
                    projectData.map((project) => {
                        return (
                            <ProjectCard  project={project} />
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Gallery