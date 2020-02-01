export default (): void => {
  interface IFilter {
    readonly id: string | number
    label?: string,
    values: [{
      id: string | number,
      label: string
    }]
  }

  const byUsers: IFilter = {
    id: "12",
    label: "By Users",
    values: [{
      id: "9999",
      label: "Alex"
    }]
  };
  const byCompany = {} as IFilter;
  const byTeams = <IFilter>{};

  interface FilterWithCount extends IFilter {
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
  };

  // =================================

  interface IClock {
    time: Date,

    setTime(date: Date): void
  }

  class Clock implements IClock {
    time: Date = new Date();

    setTime(date: Date) {

    }
  }

  // =================================
  interface IStyle {
    [key: string]: string
  }

  const css: IStyle = {
    border: '1px solid black',
    marginTop: '20px;'
  };

}
