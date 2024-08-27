import { ArrowPathIcon, CloudArrowDownIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name:'Photography',
    description: 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed similique totam alias, provident nihil deserunt ratione vitae earum facere. Expedita veniam ipsa ducimus nesciunt ratione officia numquam sint modi totam.',
    icon:CloudArrowDownIcon,
  },
  {
    name:'PORTIFOLOIO LISTS',
    description: 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed similique totam alias, provident nihil deserunt ratione vitae earum facere. Expedita veniam ipsa ducimus nesciunt ratione officia numquam sint modi totam.',
    icon:LockClosedIcon,
  },
  {
    name:'FULLY CUSTOMIZABLE',
    description: 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed similique totam alias, provident nihil deserunt ratione vitae earum facere. Expedita veniam ipsa ducimus nesciunt ratione officia numquam sint modi totam.',
    icon:ArrowPathIcon,
  },
  {
    name:'FREE PLUGINS',
    description: 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed similique totam alias, provident nihil deserunt ratione vitae earum facere. Expedita veniam ipsa ducimus nesciunt ratione officia numquam sint modi totam.',
    icon:FingerPrintIcon,
  },
]

const Features = () => {
  return (
    <div>
      <section className="pb-12 xl:py-24">
        <div className="container mx-auto">
          <h2 className="section-title mb-2 xl:mb-3 text-center mx-auto">Key Features</h2>

          <div className="flex flex-col">
            <div className="mx-auto max-7xl text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">Everything you need to deliver faster.</p>
              <p className="mt-6 text-lg leading-8 text-black dark:text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, molestias amet unde error aperiam vero temporibus aliquid at ad tenetur, omnis accusantium blanditiis, esse fugit sint commodi laboriosam voluptates quis.
              </p>
            </div>
          </div>
          {/* Features Lisrs  */}
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {
                features.map((feature) => (
                  <div 
                  key={feature.name}
                  className=" relative hover:scale-110 transition-all "
                  >
                    <dt className="text-base font-semibold leading-7 text-muted-foreground justify-center">
                      <div className="flex flex-col w-[100px] h-[100px] bg-primary rounded-full items-center mb-4 justify-center">
                        <feature.icon
                        className='h-[36px] w-[36px] text-white' aria-hidden = "true"
                        />
                      </div>
                      <div className="text-black dark:text-white">
                        {feature.name}
                      </div>
                    </dt> 

                    <dd className="mt-2 text-base leading-7">
                        {feature.description}
                    </dd>
                  </div>
                )) 
              }
            </dl>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features