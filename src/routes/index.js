import { Router } from 'express';
import FeedsController from '../controller/feeds';
import MongoController from '../controller/mongo';
import SitemapController from '../controller/sitemap';

const router = Router();
const feeds = new FeedsController();
const mongo = new MongoController();
const sitemap = new SitemapController();

router.get('/feeds', feeds.index.bind(feeds));
router.get('/mongo', mongo.index.bind(mongo));
router.get('/sitemap', sitemap.index.bind(sitemap));

export default router;
