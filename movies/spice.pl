if ($q_check_lc =~ /movies/) {

    $call_extf = qq(/js/nrmov.js);
    if ($1) {
	$call_ext = qq(/imov/$1);
    } else {
	$call_ext = qq(/imov/);
    }

}
