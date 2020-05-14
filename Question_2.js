class intevalExpansion {
    constructor() {
        this.months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov", "dec"]
        this.daysPerMonth = intevalExpansion._daysPerMonth();
        this.monthsMap = (() => {
            const map = new Map();
            const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov", "dec"];
            months.forEach((month, idx) => map.set(month, idx));
            return map;
        })();
    }

    unfoldIntervals(intervals, strategy) {

        if (strategy !== 2) {
            return this._strategy1(intervals);
        } else {
            return this._strategy2(intervals);
        }
    }

    _strategy1(dateIntervals) {
        let intervalBoundaries = [];
        dateIntervals.forEach(interval => {
            intervalBoundaries.push(...interval);
        });

        intervalBoundaries = this._sortIntervals(intervalBoundaries);

        return this._createIntervalsFromBoundaries(intervalBoundaries);
    }

    _strategy2(dateIntervals) {
        let boundaries = [];
        dateIntervals.forEach(interval => boundaries.push(interval[0]));
        boundaries.push(dateIntervals[dateIntervals.length - 1][1]);

        boundaries = this._sortIntervals(boundaries);

        return this._createIntervalsFromBoundaries(boundaries);
    }

    _createIntervalsFromBoundaries(intervalBoundaries) {
        const boundariesCount = intervalBoundaries.length;
        const intervals = [];
        let individualInterval = [];
        
        for(let i=0, j=1; i < boundariesCount - 1, j < boundariesCount; i++, j++) {
            individualInterval.push(intervalBoundaries[i]);
            if(j < boundariesCount - 1) {
                let split = intervalBoundaries[j].split('-');
                let date = Number(split[0]);
                if (date === 1) {
                    const monthIdx = this.monthsMap.get(split[1]) - 1;
                    let previousMonth = this.months[monthIdx];
                    let newDate = this.daysPerMonth.get(previousMonth);
                    split[0] = newDate;
                    split[1] = previousMonth;
                } else {
                    date -= 1;
                    split[0] = date;
                }
                individualInterval.push(split.join('-'));
            } else {
                individualInterval.push(intervalBoundaries[j]);
            }
            intervals.push(individualInterval);
            individualInterval = [];
        }
        return intervals;
    }

    _sortIntervals(intervals) {
        intervals.sort((x, y) => {
            const month1 = x.split('-')[1];
            const month2 = y.split('-')[1];

            return this.monthsMap.get(month1.toLowerCase()) - this.monthsMap.get(month2.toLowerCase());
        });

        return intervals;
    }

    static _daysPerMonth() {
        const map = new Map();
        map.set("jan", 31);
        map.set("feb", 28);
        map.set("mar", 31);
        map.set("apr", 30);
        map.set("may", 31);
        map.set("jun", 30);
        map.set("jul", 31);
        map.set("aug", 31);
        map.set("sept", 30);
        map.set("oct", 31);
        map.set("nov", 30);
        map.set("dec", 31);

        return map;
    }
}

const intervalSimplifier = new intevalExpansion();
const intervals = [["1-jan", "2-may"], ["2-feb", "30-jun"], ["3-mar", "8-jul"]];

console.log("Intervals with strategy 1: ", intervalSimplifier.unfoldIntervals(intervals, 1));
console.log("\n");
console.log("Intervals with strategy 2: ", intervalSimplifier.unfoldIntervals(intervals, 2));