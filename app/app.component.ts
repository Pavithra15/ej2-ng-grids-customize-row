import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { data } from './data';
import { RowDataBoundEventArgs } from '@syncfusion/ej2-ng-grids';

@Component({
    selector: 'app-container',
    template: `<ej-grid #grid [dataSource]='data' [enableHover]='false' [allowSelection]='false' [height]='315' (rowDataBound)='rowDataBound($event)'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='right' format='C2' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130 ></e-column>
                    </e-columns>
                </ej-grid>`
})
export class AppComponent implements OnInit {

    public data: Object[];

    ngOnInit(): void {
        this.data = data;
    }

    rowDataBound(args: RowDataBoundEventArgs) {
        if (args.data['Freight'] < 30) {
            args.row.classList.add('below-30');
        }
    }
}