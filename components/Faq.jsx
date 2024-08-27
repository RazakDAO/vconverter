import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"

const Faq = () => {
  return (
    <section>
        <div className='container mx-auto'>
            <div className='w-full pt-12 mb-6 xl:mb-24'>
                <h2 className='section-title mb-12 text-center mx-auto'>
                    Our studio
                </h2>
                <div>
                    {/* Accordion */}
                    <Accordion type='single' collapsible className='w-full'>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className='ms-3'>
                                    01. hat kind of photography equipemnt do you use?
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi labore qui repellendus facere id totam fugiat, voluptas, a, maiores eum sapiente ad nemo. Quidem saepe odit officia deleniti? Ex, quisquam?
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <div className='ms-3'>
                                    01. hat kind of photography equipemnt do you use?
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi labore qui repellendus facere id totam fugiat, voluptas, a, maiores eum sapiente ad nemo. Quidem saepe odit officia deleniti? Ex, quisquam?
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                <div className='ms-3'>
                                    01. hat kind of photography equipemnt do you use?
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi labore qui repellendus facere id totam fugiat, voluptas, a, maiores eum sapiente ad nemo. Quidem saepe odit officia deleniti? Ex, quisquam?
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Faq