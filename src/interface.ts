export default (): void => {
    interface Filter {
        readonly id: string | number
        label?: string,
        values: [{
            id: string | number,
            label: string
        }]
    }

    const byUsers: Filter = {
        id: "12",
        label: "By Users",
        values: [{
            id: "9999",
            label: "Alex"
        }]
    };
    const byCompany = {} as Filter;
    const byTeams = <Filter>{};

    interface FilterWithCount extends Filter {
        getValues: () => number
    }

    const byType: FilterWithCount = {
        id: '13',
        label: "by Type",
        values: [{
            id: 1,
            label: "type 1"
        }],
        getValues() {
            return this.values.length;
        }
    }
    
}
