
/*
CIRCULAR BUFFER

Purpose: A Data structure that is intended to hold large amounts of streaming data,
		Overwrites the oldest data once full.
		Reads the oldest data first.

Functions To be used:
Var a = new CircleBuffer(X);// - create a new buffer that stores X elements.
a.buf_write(Y);// - Writes Y to the buffer as the newest element.
a.buf_read();// - Returns the first element in the buffer, Returns null if no elements to read.
*/

function CircleBuffer(buffer_length){
	this.buffer_length = buffer_length; //max number of elements
	this.write_position = 0; // Index at which to write new element
	this.read_position = 0; // Index of oldest element/element to read
	this.data_points = []; // 
	for (var i = 0; i<this.buffer_length; i++){
		this.data_points.push(null);
	}
}

CircleBuffer.prototype.buf_next_pos = function (p){
		if (p == (this.buffer_length - 1)){
			return 0;
		}
		else{
			return p + 1;
		}
	}	

CircleBuffer.prototype.buf_is_empty = function (){
		return this.read_position == this.write_position;
	}

CircleBuffer.prototype.buf_is_full = function (){
		//console.log(this.buf_next_pos(this.write_position));
		//console.log("read - " + this.read_position + ", write - " +this.write_position);
		return this.buf_next_pos(this.write_position) == this.read_position;
	}

CircleBuffer.prototype.buf_write = function (write_value){
		if (this.buf_is_full()){
			this.read_position_incr();
			this.data_points[this.write_position] = write_value;
			this.write_position_incr();
		}
		else{
			this.data_points[this.write_position] = write_value;
			this.write_position_incr();
		}
	}

CircleBuffer.prototype.buf_read = function() {
		if (this.buf_is_empty()){
			//alert("BUFFER EMPTY");
			console.log("Nothing to see here, buffer is empty");
			return null;
		}
		else {
			var temp = this.data_points[this.read_position];
			this.read_position_incr();
			console.log(temp);
			return temp;
		}
	}

CircleBuffer.prototype.write_position_incr = function (){
		if(this.write_position == this.buffer_length  - 1 ){
			this.write_position = 0;
		}
		else{
			this.write_position++;
		}
	}

CircleBuffer.prototype.read_position_incr = function (){
		if (this.read_position == this.buffer_length - 1){
			this.read_position = 0;
		}
		else{
			this.read_position++;
		}
	}

