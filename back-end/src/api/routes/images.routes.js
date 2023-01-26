const { Router } = require('express');
const path = require('path');

const router = Router();

router.get(
  '/skol_lata_350ml.jpg',
  (_req, res) => res.sendFile(path.resolve('..', 'assets', 'images', 'skol_lata_350ml.jpg')),
);

router.get(
  '/heineken_600ml.jpg',
  (_req, res) => res.sendFile(path.resolve('..', 'assets', 'images', 'heineken_600ml.jpg')),
);

router.get(
  '/antarctica_pilsen_300ml.jpg',
  (_req, res) => res.sendFile(path.resolve(
    '..',
    'assets',
    'images',
    'antarctica_pilsen_300ml.jpg',
)),
);

router.get(
  '/brahma_600ml.jpg',
  (_req, res) => res.sendFile(path.resolve('..', 'assets', 'images', 'brahma_600ml.jpg')),
);

router.get(
  '/skol_269ml.jpg',
  (_req, res) => res.sendFile(path.resolve('..', 'assets', 'images', 'skol_269ml.jpg')),
);

router.get(
  '/skol_beats_senses_313ml.jpg',
  (_req, res) => res.sendFile(path.resolve(
    '..',
    'assets',
    'images',
    'skol_beats_senses_313ml.jpg',
)),
);

router.get(
  '/becks_330ml.jpg',
  (_req, res) => res.sendFile(path.resolve('..', 'assets', 'images', 'becks_330ml.jpg')),
);

router.get(
  '/brahma_duplo_malte_350ml.jpg',
  (_req, res) => res.sendFile(path.resolve(
    '..',
    'assets',
    'images',
    'brahma_duplo_malte_350ml.jpg',
)),
);

router.get(
  '/becks_600ml.jpg',
  (_req, res) => res.sendFile(path.resolve('..', 'assets', 'images', 'becks_600ml.jpg')),
);

router.get(
  '/skol_beats_senses_269ml.jpg',
  (_req, res) => res.sendFile(path.resolve(
    '..',
    'assets',
    'images',
    'skol_beats_senses_269ml.jpg',
)),
);

router.get(
  '/stella_artois_275ml.jpg',
  (_req, res) => res.sendFile(path.resolve(
    '..',
    'assets',
    'images',
    'stella_artois_275ml.jpg',
  )),
);

module.exports = router;