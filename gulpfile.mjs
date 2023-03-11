import { deleteAsync } from 'del';
import gulp from 'gulp';

const dest = './build';
const sources = ['./types/three/src/**', './types/three/examples/**', './types/three/index.d.ts'];

const clean = () => deleteAsync([`${dest}/**`], { force: true });
const copy = () => gulp.src(sources, { base: './types/three' }).pipe(gulp.dest(dest));
const copyPkg = () => gulp.src(['./package.json']).pipe(gulp.dest(dest));

const build = gulp.series(clean, copy, copyPkg);

export { clean, copy, copyPkg, build, build as default };
