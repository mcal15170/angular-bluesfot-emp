

export class Employee {
  public DOB: Date;
  public DOJ: Date;
  public DOL: Date;
  public AadharNo: number;
  public DesignationID: number;
  public PhoneNumber: number;
  public Salary: number;
  public TotalExperience: number;
  public AadharPhoto: string;
  public Address: string;
  public Email: string;
  public FirstName: string;
  public DesignationName: string;
  public Fname: string;
  public LastUpdatedResume: string;
  public Lname: string;
  public City: string;
  public Mname: string;
  public PanNo: string;
  public PanPhoto: string;
  public Refrence: string;
}

export class ChangePassword {
  public OldPassword: string;
  public NewPassword: string;
  public ConfirmPassword: string;
}

export class StaticPages {
  public Id: number;
  public Name: string;
  public Body: string;
}

export class Setting {
  public Id: number;
  public Tag: string;
  public Value: string;
}

export class EmailTemplate {
  public Id: number;
  public Name: string;
  public Subject: string;
  public Body: string;
}


export class Category {
  public Id: number;
  public Name: string;
}
