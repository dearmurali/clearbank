clearbank.component('updateContacts', {

	templateUrl: "main/partials/updateContact.html",
	controller: function () {
		var self = this;
		self.btntext="+ Add New"
		self.showform = false;
		self.showHide=function(){
			self.showform= !self.showform;
			if(self.showform)
			self.btntext="Close";
			else
				self.btntext="+ Add New"
		}
		self.branches = [
			{
				branchName: "Indiar Palace",
				branchContact: 9893809097,
				branchIFSC : "SBIN0000695",
				branchMICR : 490002007,
				branchAddress: `plot 28, Kavita Nagar, Avanti Vihar, Raipur, CG-490001`,
				branchManagerContact : 7869057476,
				branchManager : "K V Narsimha Rao"
		},
			{
				branchName: "Indiar Palace",
				branchContact: 9893809097,
				branchMICR : 490002007,
				branchIFSC : "SBIN0000695",
				branchAddress: `plot 28, Kavita Nagar, Avanti Vihar, Raipur, CG-490001`,
				branchManagerContact : 7869057476,
				branchManager : "K V Narsimha Rao"
		}
	  ]
		self.addNewBranch = function () {
			alert(self.branches);
			self.branches.splice(0,0,{
				branchName: self.branchName,
				branchContact: self.branchContact,
				branchIFSC :self.branchIFSC,
				branchMICR : self.branchMICR,
				branchAddress: self.branchAddress,
				branchManagerContact : self.branchManagerContact,
				branchManager : self.branchManager
			});
			
			console.log(self.branches);
			document.getElementsByName('branch-details')[0].reset();
			self.showHide();
		}
	}

})
