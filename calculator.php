<?php

header('Content-Type: application/json');

function calculateTriangleArea($base, $height) {
    return 0.5 * $base * $height;
}

function calculateCircleArea($radius) {
    return pi() * pow($radius, 2);
}

function calculateSquareArea($side) {
    return pow($side, 2);
}

$shape = isset($_GET['shape']) ? strtolower($_GET['shape']) : '';
$area = 0;

switch ($shape) {
    case 'triangle':
        $base = isset($_GET['base']) ? floatval($_GET['base']) : 0;
        $height = isset($_GET['height']) ? floatval($_GET['height']) : 0;
        $area = calculateTriangleArea($base, $height);
        break;
    case 'circle':
        $radius = isset($_GET['radius']) ? floatval($_GET['radius']) : 0;
        $area = calculateCircleArea($radius);
        break;
    case 'square':
        $side = isset($_GET['side']) ? floatval($_GET['side']) : 0;
        $area = calculateSquareArea($side);
        break;
}

$response = ['shape' => $shape, 'area' => $area];
echo json_encode($response);
