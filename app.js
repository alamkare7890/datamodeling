var removeCoverredIntervals = function(intervals) {
    let remaining = 0;
    for(let i = 0; i < intervals.length; i++) {
        let isCovered = false;
        for(let j = 0; j < intervals.length; j++) {
            if(i === j) continue;
            const [a, b] = intervals[i];
            const [c, d] = intervals[j];
            if(c <= a && b <= d) {
                isCovered = true;
                break;
            }
        }
        if(!isCovered) {
            remaining++;
        }
    }
    return remaining;
}