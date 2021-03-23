from django.contrib import admin
from .models import ItemVariant, Country, Item, Category, Review

admin.site.register(Review)
admin.site.register(Category)
admin.site.register(Item)
admin.site.register(Country)
admin.site.register(ItemVariant)

# Register your models here.
