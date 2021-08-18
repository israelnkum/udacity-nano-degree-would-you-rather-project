export function getPercentage (position, total) {
    return ((position/total) * 100).toFixed(2) + '%'
}
