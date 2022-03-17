import { BehaviorSubject, Observable } from 'rxjs';
import { refCount, publishReplay } from 'rxjs/operators';

export class StreamResource {
    private loading = false;
    private behaviorSubject: BehaviorSubject<any>;
    public readonly obs: Observable<any>;

    constructor(defaultValue?: any) {
        this.behaviorSubject = new BehaviorSubject(defaultValue);
        this.obs = this.behaviorSubject.asObservable().pipe(publishReplay(1), refCount());
    }

    request(method: any): void {
        if (method && !this.loading) {
            this.loading = true;
            method().toPromise().then((data: any) => {
                if (data) { this.update(data); }
                this.loading = false;
            });
        }
    }

    getValue() {
        return this.behaviorSubject.getValue();
    }

    update(data: any) {
        this.behaviorSubject.next(data);
    }

    refresh() {
        const data = this.getValue();
        if (data) { this.update(data); }
    }
}
