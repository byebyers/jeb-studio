import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons
import singletonHome from './singletonHome'
import singletonAbout from './singletonAbout'
import singletonContact from './singletonContact'
import singletonMenu from './singletonMenu'

// Documents
import work from './work'

// Common
import seo from './common/seo'
import defaultImage from './common/defaultImage'
import modularImageBlock from './common/modularImageBlock'
import textBlock from './common/textBlock'
import imageCarouselBlock from './common/imageCarouselBlock'
import collectionGridBlock from './common/collectionGridBlock'
import modularImageTextBlock from './common/modularImageTextBlock'
import modularDoubleImageBlock from './common/modularDoubleImageBlock'
import modularSideBySideImageBlock from './common/modularSideBySideImageBlock'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    singletonHome,
    singletonAbout,
    singletonContact,
    singletonMenu,
    work,
    defaultImage,
    modularImageBlock,
    modularImageTextBlock,
    modularDoubleImageBlock,
    modularSideBySideImageBlock,
    textBlock,
    imageCarouselBlock,
    collectionGridBlock,
    seo
  ]),
})
