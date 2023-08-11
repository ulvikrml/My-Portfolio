import { FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import { SiUpwork } from 'react-icons/si';
import { BsInstagram } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';


export const footerData =  [
    {
        title: "Pages",
        links: [
            {
                name: "Home",
                link: "/"
            },
            {
                name: "Projects",
                link: "/projects"
            }
        ]
    },
    {
        title: "Social",
        links: [
            {
                name: "Github",
                link: "https://github.com/ulvikrml",
                icon: FiGithub
            },
            {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/karimli/",
                icon: SlSocialLinkedin
            },
            {
                name: "Upwork",
                link: "https://www.hackerrank.com/ulvikrml",
                icon: SiUpwork
            }
        ]
    },
    {
        title: "Contact",
        links: [
            {
                name: "Email",
                link: "mailto:ulvikrml@gmail.com",
                icon: MdOutlineEmail
            },
            {
                name: "Whatsapp",
                link: "https://wa.me/994507366767",
                icon: BsWhatsapp
            },
            {
                name: "Instagram",
                link: "https://www.instagram.com/ulvi.krml/",
                icon: BsInstagram
            }
        ]
    }
]

export const repoLink = "https://github.com/ulvikrml/My-Portfolio";