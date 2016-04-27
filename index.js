module.exports = function(arr) {
    var max;

    if(Array.isArray(arr) && arr.length) { //if arr is not Array or is epmty return null
        max = arr[0];

        for(var i = 0, length = arr.length; i < length; i++) {
            if(arr[i] > max) {
                max = arr[i];
            }
        }

        return max;
    } else  {
        return null;
    }
};