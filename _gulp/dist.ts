///<reference path="../typings/gulp/gulp" />

import {Target, Module, CoreTypeScriptOptions, TypeScriptRenderer} from "gulp-typescript-helper";
import * as PATH from "./constants/Paths";
import * as gulp from "gulp";
import * as TASK from "./constants/TaskNames";
import * as File from "../_utility/file-promise";
import {JsonMap} from "../source/JSON";
import {IMap} from "../source/System/Collections/Dictionaries/IDictionary";
import {Promise} from "../source/System/Promises/Promise";
import streamToPromise from "stream-to-promise-agnostic";

const convert = streamToPromise(Promise);

const fields:IMap<boolean> = {
	"name": true,
	"version": true,
	"license": true,
	"author": true,
	"description": true,
	"repository": true,
	"private": true,
	"keywords": true
};

function getPackage(dist:string):PromiseLike<JsonMap>
{
	return File.json.read<JsonMap>('./package.json')
		.then(pkg=>
		{
			for(let key of Object.keys(pkg))
			{
				if(!fields[key])
					delete pkg[key];
			}
			pkg["name"] += "-" + dist;
			return pkg;
		});

}

function savePackage(dist:string, folder:string = dist):PromiseLike<File[]>
{
	return getPackage(dist)
		.then(pkg=>File.json.write(`./dist/${folder}/package.json`, pkg))
		.then(()=>copyReadme(folder));
}

function copyReadme(folder:string):PromiseLike<File[]>
{
	return convert.toPromise<File[]>(
		gulp.src("./dist/README.md")
			.pipe(gulp.dest(`./dist/${folder}/`)));
}

const DEFAULTS:CoreTypeScriptOptions = Object.freeze(<CoreTypeScriptOptions>{
	noImplicitAny: true,
	removeComments: true,
	noEmitHelpers: true,
	sourceMap: true,
	declaration: true
});

const renderer = TypeScriptRenderer
	.inject(Promise)
	.fromTo(PATH.SOURCE, "./dist" , DEFAULTS);

gulp.task(
	TASK.DIST_ES6,
	()=> renderer
		.init(Module.ES6, Target.ES6, Module.ES6)
		.clear()
		.render()
		.then(()=>savePackage(Module.ES6))
);

gulp.task(
	TASK.DIST_AMD,
	()=> renderer
		.init(Module.AMD, Target.ES5, Module.AMD)
		.clear()
		.minify()
		.render()
		.then(()=>savePackage(Module.AMD))
);

gulp.task(
	TASK.DIST_UMD,
	()=> renderer
		.init(Module.UMD + '.min', Target.ES5, Module.UMD)
		.clear()
		.minify()
		.render()
		.then(()=>savePackage(Module.UMD, Module.UMD + '.min'))
);

gulp.task( // Need to double process to get the declarations from es6 without modules
	TASK.DIST_COMMONJS,
	()=> renderer
		.init(Module.COMMONJS, Target.ES5, Module.COMMONJS)
		.clear()
		.render()
		.then(()=>savePackage(Module.COMMONJS))
);

gulp.task(
	TASK.DIST_SYSTEMJS,
	()=> renderer
		.init(Module.SYSTEMJS, Target.ES5, Module.SYSTEMJS)
		.clear()
		.render()
		.then(()=>savePackage(Module.SYSTEMJS))
);

gulp.task(TASK.DIST, [
	TASK.DIST_ES6,
	TASK.DIST_AMD,
	TASK.DIST_UMD,
	TASK.DIST_COMMONJS,
	TASK.DIST_SYSTEMJS
]);

// gulp.task(
// 	TASK.SOURCE,
// 	()=>{
// 		var r = typescript
// 			.at('./source', Target.ES5, Module.UMD, {noEmitHelpers: true});
// 		var s = r.sourceMapOptions;
// 		s.sourceRoot = "";
// 		s.includeContent = false;
//
// 		return r.render()
// 	});