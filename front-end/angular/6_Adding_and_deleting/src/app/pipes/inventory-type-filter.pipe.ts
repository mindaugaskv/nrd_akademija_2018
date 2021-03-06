import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/';

@Pipe({
    name: 'inventoryTypeFilter'
})

export class InventoryTypeFilterPipe implements PipeTransform {
    transform(items: Observable<any>, typeFilter: any): any {
        if (items == null) {
            return [];
        }

        if (typeFilter) {
            return items.filter(i => i.type === typeFilter);
        }

        return items;
    }
}
