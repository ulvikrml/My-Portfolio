import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    const mailAddress = 'ulvikrml@gmail.com'
    const [isCopied, setIsCopied] = useState(false)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const mailHandler = () => {
        setIsCopied(true);
        setIsButtonDisabled(true);
        setTimeout(() => {
            setIsCopied(false);
            setIsButtonDisabled(false);
        }, 3000);
    };
    return (
        <section className="mt-28 sm:mt-36 md:mt-48 relative container px-5 sm:px-0 mx-auto text-center overflow-y-hidden">
            <img className="w-30 m-auto mb-2" src="/images/stickers/lineBreak.svg" alt='lineBreak' />
            <div className="pt-14 pb-40 flex flex-col mx-auto items-center w-full">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-10 text-white">Interested in Working Together?</h2>
                <CopyToClipboard
                    text={mailAddress}>
                    <a href={`mailto:${mailAddress}`} className={`btn text-lg px-6 py-3 ${isButtonDisabled ? 'pointer-events-none' : ''}`} onClick={mailHandler}>
                        {isCopied ? 'Email copied!' : 'Get in Touch'}
                    </a>
                </CopyToClipboard>
            </div>
            <img className="w-full h-20 md:h-28 lg:h-40 object-cover -mt-40 mx-auto object-top" src="/images/stickers/fancyLines.svg" alt='fancyLines' />
        </section>
    )
}

export default Contact