from django.shortcuts import render

# Create your views here.



def index(request):
    return render(request, 'home/abdumalik.html')

def home(request):
    return render(request, 'home/index.html')

def lib(request):
    return render(request, 'home/lib.html')