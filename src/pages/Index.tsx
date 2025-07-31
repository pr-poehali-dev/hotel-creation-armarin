import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [checkIn, setCheckIn] = useState<Date | undefined>(new Date());
  const [checkOut, setCheckOut] = useState<Date | undefined>(new Date(Date.now() + 24 * 60 * 60 * 1000));

  const rooms = [
    {
      id: 1,
      name: 'Номер Люкс "Морской бриз"',
      price: 8500,
      description: 'Просторный номер с видом на море, балконом и всеми удобствами',
      features: ['Вид на море', 'Балкон', 'Кондиционер', 'Мини-бар']
    },
    {
      id: 2,
      name: 'Стандартный номер "Волна"',
      price: 5500,
      description: 'Уютный номер с современным дизайном в морском стиле',
      features: ['Душ', 'WiFi', 'Телевизор', 'Сейф']
    },
    {
      id: 3,
      name: 'Семейный номер "Якорь"',
      price: 12000,
      description: 'Большой номер для семьи с детской зоной',
      features: ['2 спальни', 'Детская кроватка', 'Кухонный уголок', 'Игровая зона']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-marine-50 to-marine-100">
      {/* Navigation */}
      <nav className="bg-primary/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Anchor" size={32} className="text-primary-foreground" />
              <h1 className="text-2xl font-bold text-primary-foreground">ArMarinHouse</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#hero" className="text-primary-foreground hover:text-accent transition-colors">Главная</a>
              <a href="#rooms" className="text-primary-foreground hover:text-accent transition-colors">Номера</a>
              <a href="#gallery" className="text-primary-foreground hover:text-accent transition-colors">Галерея</a>
              <a href="#about" className="text-primary-foreground hover:text-accent transition-colors">О нас</a>
              <a href="#contacts" className="text-primary-foreground hover:text-accent transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden" style={{backgroundImage: 'url(/img/16b27573-246c-4bf9-a6e4-8cdf97f47e47.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4">
          <div className="mb-8">
            <Icon name="Waves" size={80} className="mx-auto mb-6 text-marine-200" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            ArMarinHouse
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Роскошная гостиница на берегу моря с незабываемым видом и высочайшим уровнем сервиса
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg">
                <Icon name="Calendar" size={20} className="mr-2" />
                Забронировать номер
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Бронирование номера</DialogTitle>
                <DialogDescription>
                  Выберите даты заезда и выезда
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Дата заезда</h4>
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    className="rounded-md border"
                  />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Дата выезда</h4>
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    className="rounded-md border"
                  />
                </div>
                <Button className="w-full">
                  Проверить доступность
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/70" />
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Наши номера</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите идеальный номер для незабываемого отдыха
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url(/img/79878e9c-28c6-4c9e-b98c-d1a2d1b79650.jpg)'}}>
                  <div className="h-full bg-black/30 flex items-center justify-center">
                    <Icon name="Bed" size={48} className="text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{room.name}</CardTitle>
                  <CardDescription>{room.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {room.features.map((feature, index) => (
                        <span key={index} className="px-3 py-1 bg-marine-100 text-marine-800 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        {room.price.toLocaleString()} ₽
                      </span>
                      <span className="text-muted-foreground">за ночь</span>
                    </div>
                    <Button className="w-full">
                      <Icon name="Calendar" size={16} className="mr-2" />
                      Забронировать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-marine-50 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Галерея</h2>
            <p className="text-xl text-muted-foreground">
              Посмотрите на красоту нашей гостиницы
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-video rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="h-full bg-cover bg-center" style={{backgroundImage: `url(/img/${item <= 3 ? '16b27573-246c-4bf9-a6e4-8cdf97f47e47.jpg' : item <= 5 ? '79878e9c-28c6-4c9e-b98c-d1a2d1b79650.jpg' : 'c850a87a-13cc-4f29-87c3-e1200a85afdb.jpg'})`}}>
                  <div className="h-full bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Icon name="Camera" size={32} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">О нас</h2>
              <p className="text-lg text-muted-foreground mb-6">
                ArMarinHouse — это уникальная гостиница, расположенная на берегу моря. 
                Наша миссия — предоставить гостям незабываемый отдых в атмосфере комфорта и роскоши.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Каждый номер оформлен в морском стиле и оснащен всем необходимым для комфортного пребывания. 
                Мы гордимся нашим персоналом и высоким уровнем сервиса.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Номеров</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <div className="h-full bg-cover bg-center" style={{backgroundImage: 'url(/img/16b27573-246c-4bf9-a6e4-8cdf97f47e47.jpg)'}}>
                <div className="h-full bg-black/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-marine-50 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами для бронирования
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Icon name="MapPin" size={24} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Адрес</h4>
                  <p className="text-muted-foreground">
                    г. Сочи, ул. Морская, д. 1<br />
                    354000, Россия
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Phone" size={24} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Телефон</h4>
                  <p className="text-muted-foreground">+7 (800) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Mail" size={24} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-muted-foreground">info@armarinhouse.ru</p>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-marine-200 to-marine-400 rounded-lg flex items-center justify-center">
              <Icon name="Map" size={48} className="text-marine-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Anchor" size={24} />
                <h3 className="text-xl font-bold">ArMarinHouse</h3>
              </div>
              <p className="text-primary-foreground/80">
                Роскошная гостиница на берегу моря
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Бронирование номеров</li>
                <li>Ресторан</li>
                <li>SPA-центр</li>
                <li>Экскурсии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>+7 (800) 123-45-67</p>
                <p>info@armarinhouse.ru</p>
                <p>г. Сочи, ул. Морская, д. 1</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 ArMarinHouse. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;