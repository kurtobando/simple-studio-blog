interface Props {
    slug: string
}

const QueryPortrait = (props: Props): string => {
    const { slug } = props

    return `query QueryPortrait {
      portrait(id: "${slug}", idType: SLUG) {
        content
        title
        coverPhotos {
          coverPhotoOne {
            mediaItemUrl
            mediaDetails {
              height
              width
              sizes {
                sourceUrl
                width
                height
                fileSize
              }
            }
          }
          coverPhotoTwo {
            mediaItemUrl
            mediaDetails {
              height
              width
              sizes {
                sourceUrl
                width
                height
                fileSize
              }
            }
          }
          coverPhotoThree {
            mediaItemUrl
            mediaDetails {
              height
              width
              sizes {
                sourceUrl
                width
                height
                fileSize
              }
            }
          }
          coverPhotoFour {
            mediaItemUrl
            mediaDetails {
              height
              width
              sizes {
                sourceUrl
                width
                height
                fileSize
              }
            }
          }
        }
        galleryPhotos {
          galleryPhotoOne {
            mediaItemUrl
            mediaDetails {
              height
              width
              sizes {
                sourceUrl
                width
                height
                fileSize
              }
            }
          }
          galleryPhotoTwo {
            mediaItemUrl
            mediaDetails {
              height
              width
              sizes {
                sourceUrl
                width
                height
                fileSize
              }
            }
          }
          galleryPhotoThree {
            mediaItemUrl
            mediaDetails {
              height
              width
              sizes {
                sourceUrl
                width
                height
                fileSize
              }
            }
          }
          galleryPhotoFour {
            mediaItemUrl
            mediaDetails {
              height
              width
              sizes {
                sourceUrl
                width
                height
                fileSize
              }
            }
          }
        }
        inFrame {
          about
          name
        }
        dateAndLocation {
          date
          location
        }
        date
      }
    }
    `
}

export default QueryPortrait
