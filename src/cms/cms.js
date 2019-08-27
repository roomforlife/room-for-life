import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import LifeSamtalerPagePreview from './preview-templates/LifeSamtalerPagePreview'
import LifeEventsPagePreview from './preview-templates/LifeEventsPagePreview'
import LifeShopsPagePreview from './preview-templates/LifeShopsPagePreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('life-samtaler', LifeSamtalerPagePreview)
CMS.registerPreviewTemplate('life-events', LifeEventsPagePreview)
CMS.registerPreviewTemplate('life-shops', LifeShopsPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
