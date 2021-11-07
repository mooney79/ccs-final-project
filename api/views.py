import os
from django.http.request import HttpRequest, QueryDict
from django.http.response import JsonResponse
import requests
from django.http import HttpResponse

API_KEY = os.environ['API_KEY']

def get_price_latest(request):
    url = 'https://api.oilpriceapi.com/v1/prices/latest/'
    headers = {
        'Authorization': f'Token {API_KEY}',
        'Content-Type': 'application/json'
    }
    params = {
        'by_code': 'WTI_USD', 
    }
    response = requests.get(url = url, headers = headers, params = params)
    data = response.json()
    
    return JsonResponse(data['data']) #, safe=False)
    
def get_price_week(request):
    url = 'https://api.oilpriceapi.com/v1/prices/past_week'
    headers = {
    'Authorization': f'Token {API_KEY}',
    'Content-Type': 'application/json'
    }
    params = {
        'by_code': 'WTI_USD', 
        'by_type': 'daily_average_price'
    }
    response = requests.get(url = url, headers = headers, params = params)
    data = response.json()
    return JsonResponse(data['data'])

def get_price_month(request):
    url = 'https://api.oilpriceapi.com/v1/prices/past_month'
    headers = {
    'Authorization': f'Token {API_KEY}',
    'Content-Type': 'application/json'
    }
    params = {
        'by_code': 'WTI_USD', 
        'by_type': 'daily_average_price'
    }
    response = requests.get(url = url, headers = headers, params = params)
    data = response.json()
    return JsonResponse(data['data'])