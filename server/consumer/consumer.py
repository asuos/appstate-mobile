#!/usr/bin/env python

import os
import inspect

from lib.objects import EventsCache


class Jobs(object):
    ''' Jobs that are run by a cron job.

    '''

    def __init__(self, **kwargs):
        ''' Starts each job automatically.

        To create a new job, prefix the function with `job_` and it will
        be ran when a Jobs object is created.
        '''
        if not kwargs.get('no_auto_run'):
            [getattr(self, x)() for (x,y) in inspect.getmembers(self) if x.startswith('job_')]

    def job_update_events(self):
        ''' Refreshes the events cache. '''
        EventsCache()


if __name__ == '__main__':
    jobs = Jobs()

