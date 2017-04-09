////////////////////////////////////////////////////////////////////////////////
// -------------------------------------------------------------------------- //
//                                                                            //
//                       (C) 2010-2017 Robot Developers                       //
//                       See LICENSE for licensing info                       //
//                                                                            //
// -------------------------------------------------------------------------- //
////////////////////////////////////////////////////////////////////////////////

"use strict";

//----------------------------------------------------------------------------//
// Exports                                                                    //
//----------------------------------------------------------------------------//

module.exports = function (robot)
{
	//----------------------------------------------------------------------------//
	// Constructor                                                          Point //
	//----------------------------------------------------------------------------//

	////////////////////////////////////////////////////////////////////////////////

	function Point (ax, ay)
	{
		// Auto instantiate the Point
		if (!(this instanceof Point))
			return new Point (ax, ay);

		var p = Point.normalize (ax, ay);
		this.x = p.x;
		this.y = p.y;
	}



	//----------------------------------------------------------------------------//
	// Functions                                                            Point //
	//----------------------------------------------------------------------------//

	////////////////////////////////////////////////////////////////////////////////

	Point.prototype.isZero = function()
	{
		return this.x === 0
			&& this.y === 0;
	};

	////////////////////////////////////////////////////////////////////////////////

	Point.prototype.toSize = function()
	{
		return robot.Size
			(this.x, this.y);
	};



	//----------------------------------------------------------------------------//
	// Static                                                               Point //
	//----------------------------------------------------------------------------//

	////////////////////////////////////////////////////////////////////////////////

	Point.normalize = function (ax, ay)
	{
		if (ax instanceof Point)
			return ax;

		if (ax === undefined)
			return { x: 0, y: 0 };

		if (typeof ax   === "object" &&
			typeof ax.x === "number" &&
			typeof ax.y === "number")
			return ax;

		if (typeof ax === "number")
		{
			if (typeof ay === "number")
				return { x: ax, y: ay };
				return { x: ax, y: ax };
		}

		throw new TypeError
			("Invalid arguments");
	};



	//----------------------------------------------------------------------------//
	// Operators                                                            Point //
	//----------------------------------------------------------------------------//

	////////////////////////////////////////////////////////////////////////////////

	Point.prototype.add = function (ax, ay)
	{
		var p = Point.normalize (ax, ay);
		return Point
			(this.x + p.x, this.y + p.y);
	};

	////////////////////////////////////////////////////////////////////////////////

	Point.prototype.sub = function (ax, ay)
	{
		var p = Point.normalize (ax, ay);
		return Point
			(this.x - p.x, this.y - p.y);
	};

	////////////////////////////////////////////////////////////////////////////////

	Point.prototype.eq = function (ax, ay)
	{
		var p = Point.normalize (ax, ay);
		return this.x === p.x
			&& this.y === p.y;
	};

	////////////////////////////////////////////////////////////////////////////////

	Point.prototype.ne = function (ax, ay)
	{
		var p = Point.normalize (ax, ay);
		return this.x !== p.x
			|| this.y !== p.y;
	};

	////////////////////////////////////////////////////////////////////////////////

	Point.prototype.neg = function()
	{
		return Point (-this.x, -this.y);
	};

	////////////////////////////////////////////////////////////////////////////////

	return Point;
};
