export function getPercentage (position, total) {
    return ((position/total) * 100).toString().substring(0, 5) + '%'
}
