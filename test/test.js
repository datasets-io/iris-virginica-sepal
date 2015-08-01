/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	data = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'datasets-iris-virginica-sepal', function tests() {

	it( 'should export an object', function test() {
		expect( data ).to.be.an( 'object' );
	});

	it( 'should have a `len` property', function test() {
		assert.hasProperty( data, 'len' );
		assert.isArray( data.len );
	});

	it( 'should have a `width` property', function test() {
		assert.hasProperty( data, 'width' );
		assert.isArray( data.width );
	});

});