
import Image from 'next/image'


const KeynoteSpeakerCard = ({ picture, name, description1, description2 }) => {
    return (
        <div className="shadow rounded-md text-green-800 items-start hover:border-white flex flex-col gap-3 md:gap-6 p-4">
            <Image src={picture} alt={`Keynote speaker ${name}`} className="lg:w-3/5 mx-auto h-fit" />
            <div className="">
                <h5 className="font-semibold text-red-600 text-xl mb-2">{name}</h5>
                <p className="text-justify mb-4">{description1}</p>
                    <p>{description2}</p>
            </div>
        </div>

    )
}

export default KeynoteSpeakerCard