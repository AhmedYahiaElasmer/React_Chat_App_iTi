import React from "react";
import { Button, Text, Heading, Img , Slider,Slide } from "../component/heros";
import '../styles/hero.css'
import '../styles/font.css'
import '../styles/tailwind.css'

const paragraphs = [
  'Chat with your friends',
  'Keep you update',
  'Friendly Environment',
];
const imageUrl = '../../images/1.png'

export default function HeroPage() {
  return (
    <>
      <div className="w-full pt-[23px] sm:pt-5 bg-gradient1 h-screen">
        <div className="flex flex-col self-end items-center">
          <div className="flex md:flex-col justify-between items-start w-[50%] md:w-full gap-5">
            <Img
              src="../../images/img_untitled_1_1.png"
              alt="untitled1one"
              className="w-[31%] md:w-[20%] md:h-auto md:m-auto sm:w-[40%] sm:h-auto sm:m-auto object-cover"
            />
            <div className="flex flex-col items-start mt-[30px] gap-1.5 md:p-5 sm:m-auto md:m-auto md:text-center">
              <Heading size="s" as="h1" className="tracking-[13.68px] sm:m-auto">
                TYPING....
              </Heading>
              <Text as="p" className="tracking-[1.60px] md:m-auto md:text-center">
                Connect to the world in few touches
              </Text>
            </div>
          </div>
          
          <Text as="p" className="w-[38%] md:w-full mt-[5%] md:mt-[20px] sm:mt-[10px] tracking-[0.40px] text-center !font-medium">
            <>
              Join our world and chat with your friends and <br />
              create rooms in easy way !!
            </>
          </Text>
          <Button shape="round" className="mt-[38px] sm:px-5 position tracking-[1.28px] font-semibold min-w-[303px] transition-colors duration-700 ease-in-out hover:bg-gradient-to-r from-[#1712FF] to-[#D314D7] hover:border-none">
            Sign up now for free...
          </Button>
          {/* <Slider images={images} /> */}
          <Slide imageUrl={imageUrl} paragraphs={paragraphs} />
          {/* <Slid images={images} paragraphs={paragraphs}/> */}
         
        </div>
      </div>
    </>
  );
}
