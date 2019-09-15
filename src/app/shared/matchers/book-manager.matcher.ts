import { UrlSegment, UrlSegmentGroup, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { appInjector } from '../../../main';

export function bookManagerMatcher(segments: UrlSegment[], group: UrlSegmentGroup, route: Route) {
    console.log(group);
    console.log(group.segments[0]);
    console.log(group.segments[0].path);
    const authService = appInjector.get(AuthService);
    const isPathMatch = group.segments[0].path === 'books';
    const isAuthorized = !authService.isAuthorized();
    if (isPathMatch && isAuthorized) {
        return { consumed: [group.segments[0]] };
    } else {
        return null;
    }
}
