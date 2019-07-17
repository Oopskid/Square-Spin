
function contains(val,one,two)
{
    return val >= Math.min(one, two) & val <= Math.max(one,two);
}

function containspt(pt, one, two)
{
    return contains(pt[0], one[0], two[0]) & contains(pt[1], one[1], two[1]);
}

function trans90(pt,constdim)
{
    return [constdim - pt[1], pt[0]];
}

function revtrans90(pt, constdim) {
    return [pt[1], constdim - pt[0]];
}

function rottran90(pt, constdim, am)
{
    var prog = pt;
    for (var i = 0; i < am; i++)
    {
        prog = trans90(prog, constdim);
    }
    return prog;
}

function rotrevtran90(pt, constdim, am) {
    var prog = pt;
    for (var i = 0; i < am; i++) {
        prog = revtrans90(prog, constdim);
    }
    return prog;
}