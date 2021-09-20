import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be defined', () => {
    service.getUser().subscribe((res) => {
      expect(res).toBeDefined();
      expect(res[0].email).toEqual('Joe_Abernathy@hotmail.com');
      expect(res[0].name).toEqual('name 1');
      expect(res[0].gender).toEqual('Female');
      expect(res[0].dob).toEqual(new Date('2055-06-22T23:11:39.441Z'));
    });
  });
});
