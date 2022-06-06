import { AfterViewInit, Component, VERSION } from '@angular/core';
import { data } from './data';
import * as echarts from 'echarts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  name = 'Angular ' + VERSION.major;

  series = [];
  data = data;
  selected = null;

  ngAfterViewInit() {
    const chartDom = document.getElementById('main-graph');
    const myChart = echarts.init(chartDom);
    myChart.showLoading();

    myChart.hideLoading();

    myChart.on('click', (params) => {
      this.selected = params.data;
    });

    myChart.setOption({
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
      },
      series: [
        {
          type: 'tree',
          data: [this.data],
          top: '0%',
          bottom: '0%',
          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 14,
            fontWeight: 'bolder',
          },
          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left',
            },
          },
          expandAndCollapse: false,
          animationDuration: 550,
          animationDurationUpdate: 750,
        },
      ],
    });
  }
}
