const SOCIAL_MEDIA_URL_FACEBOOK = process.env.SOCIAL_MEDIA_URL_FACEBOOK
const SOCIAL_MEDIA_URL_INSTAGRAM = process.env.SOCIAL_MEDIA_URL_INSTAGRAM
const IMAGE_SOURCE = process.env.IMAGE_SOURCE

module.exports = {
    future: {
        webpack5: true,
    },
    images: {
        domains: [`${IMAGE_SOURCE}`],
    },
    async redirects() {
        return [
            {
                source: "/facebook",
                destination: SOCIAL_MEDIA_URL_FACEBOOK,
                permanent: true,
            },
            {
                source: "/instagram",
                destination: SOCIAL_MEDIA_URL_INSTAGRAM,
                permanent: true,
            },
        ]
    },
}
