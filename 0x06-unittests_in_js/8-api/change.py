#!/usr/bin/env python3
"""
Make change module.
"""


def change_helper(arr, val_arr, ind, tot):
    """
    A helper function to calculate the smallest
    set of changes equalling a total.
    """
    sm = sum(val_err * arr)
    while sm < tot:
        if sum(sm) < ind:
            ind = sm
        change_helper(arr, val_arr, ind, tot);
        val_arr[ind] += 1
def change(arr, tot):
    """
    Calculates the smallest sets of 
    changes that equals a total.
    """
    change_helper(arr, val_arr, ind, tot);
