import Image from 'next/image'
import ModelViewer from './modelviewer'

export default function HeroSection({ imgsrc, avatarsrc, is3D=false, glbsrc }) {
  return (
    <div className="w-full mx-auto bg-transparant rounded-2xl my-10">
      <div>
        {is3D ?(
          <ModelViewer
          glbsrc={glbsrc}/>
        ) : (        <Image
          src={imgsrc}
          alt="Preview"
          width={600}
          height={400}
          className="w-full h-120 object-cover rounded-t-2xl"
        />) }

      </div>
      <div className="py-3 bg-[#2E2E2E] px-6 w-full rounded-b-lg">
        <h1 className="text-3xl font-bold mb-3">Steampunk Girl</h1>
        <div className="flex justify-start">
          {avatarsrc && (
            <Image
              src={avatarsrc}
              alt="avatar"
              width={30}
              height={30}
              className="mr-3 rounded-full"
            />
          )}
          <p>Aditya Arrofi</p>
        </div>
      </div>
    </div>
  )
}