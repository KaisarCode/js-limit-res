// Limit results array
function limitRes(res, limit) {
    limit = limit || 0;
    if (limit) {
        var tmp = [];
        res.forEach(function(r, i){
            if (i < limit) {
                tmp.push(r);
            }
        });
        return tmp;
    } else { return res; }
}
