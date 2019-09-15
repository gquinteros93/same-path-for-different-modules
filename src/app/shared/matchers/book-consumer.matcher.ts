import { UrlSegment, UrlSegmentGroup, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { appInjector } from '../../../main';

export function bookConsumerMatcher(segments: UrlSegment[], group: UrlSegmentGroup, route: Route) {
    console.log('ejecute');
    const authService = appInjector.get(AuthService);
    const isPathMatch = group.segments[0].path === 'books';
    const isAuthorized = authService.isAuthorized();
    if (isPathMatch && isAuthorized) {
        return { consumed: [] };
    } else {
        return null;
    }
}
