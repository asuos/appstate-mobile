import sys
from xml.dom.minidom import parseString
from random import choice
from urllib2 import HTTPError

from httplib2 import Http
from redis import Redis


class BadHTTPStatusException(Exception): pass
class NoDataInRedis(Exception): pass


class RedisConnector(object):
    ''' Wrapper for the Redis connection.
    '''

    def __init__(self, **kwargs):
        self.host = kwargs.get('host', 'localhost')
        self.redis = Redis(self.host)

    def get(self, key):
        return self.redis.get(key)

    def set(self, key, value):
        return self.redis.set(key, value)


class Feed(object):
    ''' Base class for Feeds
    '''

    def get_feed(self, url):
        ''' Gets a feed and parses it.
        '''
        resp, content = self.h.request(url)
        status = resp.get('status', None)
        if (not status and status is not None):
            raise BadHTTPStatusException, 'status returned is ' % (status)
        dom = parseString(content)
        return resp, content, dom


class EventsCache(Feed):
    ''' Creates or updates the events cache.
    '''

    def __init__(self, **kwargs):
        self.r = kwargs.get('r', RedisConnector())
        self.h = kwargs.get('h', Http('.cache'))
        self.feed = kwargs.get('feed', 'http://events.appstate.edu/calendar-list/all/feed')
        self._process_feed()

    def _process_feed(self):
        ''' Processes the events feed.
        '''
       #resp, content, dom = self.get_feed(self.feed)
        self.r.set('events', 'all events')

