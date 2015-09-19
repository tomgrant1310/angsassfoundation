
<?php


function square1($number) {
    return $number * $number;
}

$next = square1(4);

echo $next;

function square2(&$next) {
    $numberr = $next * $next;
    echo $numberr;
}


square2($next);

?>
