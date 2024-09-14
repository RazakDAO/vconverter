'use client';

import React from 'react';

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

//Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
//import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const produitsData = [
    {
        avatar: '/produits/30.png',
        name: 'jennifer',
        job: 'Chief',
        review:
        'But I must explain to you how all this mistaken idea of denoucing pleasure and praising pain was born and I will give you a complete account.'
    },
    {
        avatar: '/produits/30.png',
        name: 'jennifer',
        job: 'Chief',
        review:
        'But I must explain to you how all this mistaken idea of denoucing pleasure and praising pain was born and I will give you a complete account.'
    },
    {
        avatar: '/produits/30.png',
        name: 'jennifer',
        job: 'Chief',
        review:
        'But I must explain to you how all this mistaken idea of denoucing pleasure and praising pain was born and I will give you a complete account.'
    },
    {
        avatar: '/produits/30.png',
        name: 'jennifer',
        job: 'Chief',
        review:
        'But I must explain to you how all this mistaken idea of denoucing pleasure and praising pain was born and I will give you a complete account.'
    },
    {
        avatar: '/produits/30.png',
        name: 'jennifer',
        job: 'Chief',
        review:
        'But I must explain to you how all this mistaken idea of denoucing pleasure and praising pain was born and I will give you a complete account.'
    },
    {
        avatar: '/produits/30.png',
        name: 'jennifer',
        job: 'Chief',
        review:
        'But I must explain to you how all this mistaken idea of denoucing pleasure and praising pain was born and I will give you a complete account.'
    }
];

const produits = () => {
    return (
        <section className='mb-12 xl:mb-32'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-12 text-center mx-auto'>
                    they say about our work
                </h2>
                <Swiper
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                }}
                className='h-[350px]'
                >
                {
                    produitsData.map((person, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Card className='p-8 min-h-[300px] cursor-pointer hover:bg-tertiary dark:hover:bg-white/10 transition-all duration-700'>
                                    <CardHeader className='p-0 mb-3'>
                                        <div className='flex flex-col items-start gap-x-4 '>
                                            {/* Avatar */}
                                            <Image
                                            src={person.avatar}
                                            width={70}
                                            height={70}
                                            alt=''
                                            priority
                                            className='mb-2'
                                            />
                                            {/* Nom */}
                                            <div className='flex flex-col' >
                                                <CardTitle>{person.name}</CardTitle>
                                                <p>{person.job}</p>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardDescription className='text-lg text-muted-foreground'>
                                        {person.review}
                                    </CardDescription>
                                </Card>
                            </SwiperSlide>
                        )
                    })
                }
                </Swiper>
            </div>
        </section>
    )
}

export default produits