import { Smile, Scan, Bird } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesData = [
    {
        icon: <Smile size={48} strokeWidth={1} />,
        title: 'Portraiture',
        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s. '
    },
    {
      icon: <Scan size={48} strokeWidth={1} />,
      title: 'Landscapes',
      description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s. '
    },
    {
      icon: <Bird size={48} strokeWidth={1} />,
      title: 'Lifestyle',
      description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s. '
    },
];

const Services = () => {
    return (
       <section className="mb-12 xl:mb-36">
        <div class="container mx-auto">
          <h2 className="section-title mb-6 xl:mb-24 text-center mx-auto">Our Services</h2>

          {/*Category Items */}
          <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
            {
              ServicesData.map((item, index) => {
                return (
                  <Card
                  className='relative w-full max-w-[425px] h-[450px] flex flex-col pb-10 justify-center items-center cursor-pointer hover:bg-tertiary dark:hover:bg-white/10 transition-all duration-700' 
                  key={index}>
                    <CardHeader
                    className='text-primary'
                    >
                      <div className='w-[80px] h-[80px] bg-primary text-white rounded-full flex justify-center items-center absolute -bottom-6 right-6'>
                        {item.icon}
                      </div>
                    </CardHeader>
                    <CardContent className='text-center'>
                      <CardTitle className='mb-4'>
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })
            }
          </div>
        </div>
       </section>
    )
}

export default Services  